package com.example.boardservicever1.service;

import com.example.boardservicever1.models.Memo;
import com.example.boardservicever1.models.MemoRepository;
import com.example.boardservicever1.models.MemoRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class MemoService {
    private final MemoRepository memoRepository;


    @Transactional
    public Long update(Long id, MemoRequestDto requestDto) {
        Memo memo = memoRepository.findById(id).orElseThrow(
                () -> new NullPointerException("ID NOT found")
        );
        memo.update(requestDto);
        return id;
    }
}
